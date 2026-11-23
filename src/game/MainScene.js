import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene');
    }

    // Se ejecuta una sola vez al iniciar la escena
    create() {

        // Creamos el avatar (círculo verde)
        this.avatar = this.add.circle(320, 200, 24, 0x10b981);

        // Creamos el nombre encima del avatar
        this.etiqueta = this.add.text(320, 160, 'Anna', {
            fontSize: '18px',
            fontFamily: 'sans-serif',
            color: '#ffffff'
        }).setOrigin(0.5);

    }

    // Se ejecuta continuamente (Game Loop)
    update(time) {

        // Movimiento vertical del avatar
        this.avatar.y = 200 + Math.sin(time * 0.004) * 8;

        // El nombre sigue al avatar
        this.etiqueta.setPosition(this.avatar.x, this.avatar.y - 38);

    }


    actualitzarNom(nouNom) {
        this.etiqueta?.setText(nouNom || 'Anònim');
    }


}
