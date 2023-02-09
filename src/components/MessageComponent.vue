<template>

<XyzTransition
    appear
    xyz="fade down-5">
    <div
        :class="{
        userMessage: incoming === 1,
        incomingMessage: incoming === -1,
        infoMessage: incoming === 0,
        }"
        class="prose max-w-[18rem]"
    >
    <p>{{ message }}</p>

    </div>
</XyzTransition>

</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    message: {
      type: String,
      required: true,
    },
    incoming: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@layer messages {

  .userMessage,
  .infoMessage,
  .incomingMessage {
    @apply p-4 mt-2 w-fit rounded-xl shadow-sm relative;

    &::after {
        @apply w-6 h-6 rounded-full -bottom-1;
        content: "";
        position: absolute;
    }
  }

  .userMessage {
    @apply bg-emerald-600 text-left;
    max-width: 10px;
    &::after {
      @apply bg-emerald-600 -left-1;
    }
  }

  .infoMessage {
    @apply bg-slate-600 self-center p-2 font-bold;
  }

  .incomingMessage {
    @apply bg-blue-600 self-end text-right;

    &::after {
        @apply bg-blue-600 -right-1;
    }
  }
}
</style>
