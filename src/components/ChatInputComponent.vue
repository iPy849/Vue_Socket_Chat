<template>
  <form
    class="bg-emerald-600 shadow-md p-4 flex justify-between align-middle"
    @submit.prevent
  >
    <input
      class="
        p-4
        border-4
        shadow-sm
        border-emerald-400
        rounded-xl
        inline
        bg-emerald-100
        w-full
        outline-none
        mx-4
      "
      id="messageInput"
      v-model="message"
      type="text"
      placeholder="Escribe tu mensaje..."
    />
    <button
      class="
        inline
        border-4
        rounded-full
        border-emerald-400
        active:bg-emerald-400
        bg-emerald-100
      "
      type="submit"
      @click="sendMessage"
      :disabled="!isConnected"
    >
      <font-awesome-icon
        icon="fas fa-paper-plane"
        class="p-4 prose text-emerald-900 prose-2xl"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'ChatInputComponent',
  emits: ['SendUserMessage'],
  props: {
    isConnected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.message === '') return;
      this.$emit('SendUserMessage', this.message);
      this.message = '';
    },
  },
};
</script>
