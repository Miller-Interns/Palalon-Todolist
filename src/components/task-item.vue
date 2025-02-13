<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['task']);
const emit = defineEmits(['update-task', 'delete-task']);

const isEditing = ref(false);
const editedText = ref(props.task.text);

const startEdit = () => {
  isEditing.value = true;
};

const saveEdit = () => {
  if (editedText.value.trim()) {
    emit('update-task', { ...props.task, text: editedText.value });
  }
  isEditing.value = false;
};

const toggleCompletion = () => {
  emit('update-task', { ...props.task, completed: !props.task.completed });
};

const removeTask = () => {
  emit('delete-task');
};
</script>

<template>
  <li class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="toggleCompletion"
    />

    <span :class="{ completed: task.completed }">{{ task.text }}</span>

    <div class="task-actions">
      <button class="edit-btn" @click="startEdit">Edit</button>
      <button class="delete-btn" @click="removeTask">Delete</button>
    </div>

    <div v-if="isEditing" class="edit-container">
      <input v-model="editedText" />
      <button class="save-btn" @click="saveEdit">Save</button>
    </div>
  </li>
</template>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  margin: 6px 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.task-actions {
  display: flex;
  gap: 8px;
}

button {
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
}

.edit-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #ffc107;
  color: black;
}

.edit-btn:hover {
  background-color: #e0a800;
}

.delete-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #dc3545;
  color: white;
}

.delete-btn:hover {
  background-color: #c82333;
}

.edit-container {
  display: flex;
  gap: 5px;
  margin-left: 10px;
  align-items: center;
}

.save-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #28a745;
  color: white;
}
</style>
