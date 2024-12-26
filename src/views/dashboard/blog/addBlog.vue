<template>
  <headPart>
    <button class="btn">Saqlash</button>
  </headPart>
  <div class="container mx-auto my-7 max-w-4xl">
    <div class="buttons flex items-center flex-wrap gap-x-4 border-2 border-gray-500 p-2"></div>
    <editor-content :editor="editor" />
  </div>
</template>
<script setup>
import headPart from '@/components/layout/headPart.vue';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

  const editor = useEditor({
    editorProps: {
    attributes: {
      class: 'border-2 border-gray-500 p-2 min-h-[12rem] max-h-[12rem] overflow-y-auto',
    },
    transformPastedText(text) {
      return text.toUpperCase()
    },
  },
    content: '<p>I\'m running Tiptap with Vue.js. 🎉</p>',
    extensions: [StarterKit],
  })

</script>

