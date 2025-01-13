<template>
  <headPart>
    <button class="btn">Saqlash</button>
  </headPart>
  <div class="container mx-auto my-7 max-w-4xl">
    <div
      class="buttons flex items-center flex-wrap gap-x-4 border-x border-t border-gray-500 p-2"
    >
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'bg-gray-300': editor.isActive('bold') }"
        class="p-1 px-2 rounded"
      >
        bold
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'bg-gray-300': editor.isActive('italic') }"
        class="p-1 px-2 rounded"
      >
        Italic
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
        :class="{ 'bg-gray-300': editor.isActive('underline') }"
        class="p-1 px-2 rounded"
      >
        Underline
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'bg-gray-300': editor.isActive('strike') }"
        class="p-1 px-2 rounded"
      >
        Strike
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-gray-300': editor.isActive('heading', { level: 1 }) }"
        class="p-1 px-2 rounded"
      >
        H1
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'bg-gray-300': editor.isActive('heading', { level: 2 }) }"
        class="p-1 px-2 rounded"
      >
        H2
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'bg-gray-300': editor.isActive('bulletList') }"
        class="p-1 px-2 rounded"
      >
        list
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'bg-gray-300': editor.isActive('orderedList') }"
        class="p-1 px-2 rounded"
      >
        Ordered list
      </button>
      <button
      v-if="editor"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
        class="p-1 px-2 rounded"
      >
        Undo
      </button>
      <button
      v-if="editor"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        class="p-1 px-2 rounded"
      >
        Redo
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>
<script setup>
import headPart from '@/components/layout/headPart.vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'

const editor = useEditor({
  editorProps: {
    attributes: {
      class:
        'border border-gray-500 p-2 min-h-[12rem] max-h-[12rem] overflow-y-auto focus:rounded-none rounded-none outline-none focus:outline-none',
    },
    transformPastedText(text) {
      return text.toUpperCase()
    },
  },
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    StarterKit,
    Underline,
    Heading.configure({
      levels: [1, 2],
    }),
  ],
})
</script>
<style>

.tiptap h1{
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem; 
  color: #1a202c; 
}

.tiptap h2{
  font-size: 2rem; 
  font-weight: semibold; 
  margin-bottom: 0.75rem;
  color: #2d3748; 
}

.tiptap ul, ol {
  margin: 1rem 0; 
  padding-left: 1.5rem; 
  color: #0b0d11; 
  font-size: 1rem; 
  line-height: 1.6; 
}

.tiptap ul {
  list-style-type: disc; 
}

.tiptap ol {
  list-style-type: decimal; 
}

.tiptap li {
  margin-bottom: 0.5rem; 
}


.tiptap li:hover {
  color: #000000; 
}


</style>