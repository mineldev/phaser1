<script setup>
// 1. Importamos las herramientas de Vue
import { ref, watch, onMounted, onUnmounted } from 'vue';


// Defino las props
const props = defineProps([
    'nomUsuari',
    'colorAvatar',
    'estat',
    'pausado'
]);

// 2. Importamos Phaser y nuestra escena
import Phaser from 'phaser';
import { MainScene } from '../game/MainScene';

const contenidor = ref(null);

// Guardamos la instancia de Phaser
let game = null;

onMounted(() => {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 640,
        height: 400,
        backgroundColor: '#1e293b',
        parent: contenidor.value,
        scene: [MainScene]
    });

    game.events.once('ready', () => {
        game?.scene.getScene('MainScene')?.actualitzarNom(props.nomUsuari);
    });
});

onUnmounted(() => game?.destroy(true));

watch(() => props.nomUsuari, (nouNom) => {
    const escena = game?.scene.getScene('MainScene');
    escena?.actualitzarNom(nouNom);
});

watch(() => props.colorAvatar, (nouColor) => {
    const escena = game?.scene.getScene('MainScene');
    escena?.canviarColor(nouColor);
});

watch(() => props.estat, (nouEstat) => {
    const escena = game?.scene.getScene('MainScene');
    escena?.actualitzarEstat(nouEstat);
});

watch(() => props.pausado, (estaPausado) => {
    if (estaPausado) {
        game?.scene.pause('MainScene');
        console.log('Juego pausado');
    } else {
        game?.scene.resume('MainScene');
        console.log('Juego reanudado');
    }
});

</script>

<template>
    <div ref="contenidor"></div>
</template>
