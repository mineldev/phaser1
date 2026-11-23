<script setup>
import { ref } from 'vue';
import PhaserCanvas from './components/PhaserCanvas.vue';

// Nombre del usuario
const nom = ref('Anna');

// Control para mostrar u ocultar el juego
const mostrarJoc = ref(true);

// Controla color avatar
const colorAvatar = ref('#10b981');

// Controla estat
const estat = ref('Disponible');

// Controla pausa
const pausado = ref(false);

</script>

<template>
    <main class="contenidor-app">

        <div class="controls">
            <input v-model="nom" placeholder="Escriu el teu nom d'usuari..." />

            <button @click="mostrarJoc = !mostrarJoc">
                {{ mostrarJoc ? 'Amaga el llenç' : 'Mostra el llenç' }}
            </button>
            <input type="color" v-model="colorAvatar">

            <select v-model="estat">
                <option value="Disponible">Disponible</option>
                <option value="Ocupado">Ocupado</option>
                <option value="Ausente">Ausente</option>
            </select>

            <button @click="pausado = !pausado">
                {{ pausado ? 'Reanudar' : 'Pausar' }}
            </button>
        </div>

       <PhaserCanvas
            v-if="mostrarJoc"
            :nomUsuari="nom"
            :colorAvatar="colorAvatar"
            :estat="estat"
            :pausado="pausado"
        />

    </main>
</template>
