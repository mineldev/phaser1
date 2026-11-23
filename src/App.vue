<script setup>
import { ref } from 'vue';
import PhaserCanvas from './components/PhaserCanvas.vue';

// Nombre del usuario
const nom = ref('Anna');

// Control para mostrar u ocultar el juego
const mostrarJoc = ref(true);

</script>

<template>
    <main class="contenidor-app">

        <div class="controls">
            <input v-model="nom" placeholder="Escriu el teu nom d'usuari..." />

            <button @click="mostrarJoc = !mostrarJoc">
                {{ mostrarJoc ? 'Amaga el llenç' : 'Mostra el llenç' }}
            </button>
        </div>

        <PhaserCanvas v-if="mostrarJoc" :nomUsuari="nom" />

    </main>
</template>
