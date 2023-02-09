<template>
  <header
    class="bg-emerald-600 shadow-md m-auto text-center p-3 flex justify-center
            align-middle sticky top-0  z-10"
    >
    <div class="bg-white w-fit rounded-full shadow-md inline-block mx-3">
      <img alt="Chat logo" src="./assets/logo.png" class="scale-110" />
    </div>
    <h1 class="prose prose-2xl">ChatRoom!</h1>
  </header>
  <main class="p-6 pb-32 flex flex-col" ref="main">
    <MessageComponent v-for="(message, i) in messages" :key="i" :incoming="message.incoming"
      :message="message.message" />
  </main>
  <ChatInputComponent
    class="fixed bottom-0 max-w-lg w-full"
    :is-connected="socket !== null"
    @send-user-message="sendMessage"
    />
</template>

<script>
import ChatInputComponent from '@/components/ChatInputComponent.vue';
import MessageComponent from './components/MessageComponent.vue';

export default {
  name: 'App',
  components: {
    ChatInputComponent,
    MessageComponent,
  },
  data() {
    return {
      messages: [
        { incoming: 0, message: 'Bienvenido a ChatRoom!' },
      ],
      socket: null,
    };
  },
  methods: {
    scrollToBotttom() {
      const totalScroll = document.body.scrollHeight;
      window.scrollTo(0, totalScroll + 100);
    },
    sendMessage(message) {
      this.messages.push({ incoming: 1, message });
      this.socket.send(message);
      this.scrollToBotttom();
    },
    connectSocket() {
      const socketUrl = 'ws://127.0.0.1:3000/ws/chat';
      this.socket = new WebSocket(socketUrl);
      if (this.socket !== null) {
        this.messages.push({ incoming: 0, message: 'Conectado al chat' });
      }
    },
  },
  created() {
    this.connectSocket();

    this.socket.onmessage = (event) => {
      this.messages.push({ incoming: -1, message: event.data });
      this.scrollToBotttom();
    };

    this.socket.onclose = () => {
      this.socket.close();
      this.socket = null;
      this.messages.push({ incoming: 0, message: 'Se ha desconectado del chat' });
      this.scrollToBotttom();
    };
  },
};

</script>
