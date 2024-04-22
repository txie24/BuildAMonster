class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = { sprite: {} };
        this.bodyX = 400;
        this.bodyY = 350;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 40;

        this.LeyeX = this.bodyX -40;
        this.LeyeY = this.bodyY -20;

        this.ReyeX = this.bodyX +40;
        this.ReyeY = this.bodyY -20;

        this.RhornX = this.bodyX +55;
        this.RhornY = this.bodyY -75;

        this.LhornX = this.bodyX -55;
        this.LhornY = this.bodyY -75;

        this.leftlegX = this.bodyX - 60;
        this.leftlegY = this.bodyY + 130;

        this.rightlegX = this.bodyX + 60;
        this.rightlegY = this.bodyY + 130;

        this.leftHandX = this.bodyX - 110;
        this.lefthandY = this.bodyY + 60;

        this.rightHandX = this.bodyX + 110;
        this.rightHandY = this.bodyY + 60;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;
        
        // Arms
        my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "monsterParts", "arm_greenC.png");
        my.sprite.leftOpenHand.flipX = true;
        my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_greenC.png");
        
        // Legs
        my.sprite.leftLeg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_greenD.png");
        
        // Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        //Eyes
        my.sprite.Leyes = this.add.sprite(this.LeyeX, this.LeyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.Reyes = this.add.sprite(this.ReyeX, this.ReyeY, "monsterParts", "eye_psycho_dark.png");

        //horn
        my.sprite.Lhorn = this.add.sprite(this.LhornX, this.LhornY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.Lhorn.flipX = true;
        my.sprite.Rhorn = this.add.sprite(this.RhornX, this.RhornY, "monsterParts", "detail_red_horn_large.png");

        // Mouth
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthD.png");
        my.sprite.defaultMouth = "mouthD.png";
        my.sprite.smileMouth = "mouth_closed_happy.png";
        my.sprite.fangsMouth = "mouth_closed_fangs.png";


    }

    update() {
        let my = this.my;
        this.input.keyboard.on('keydown-A', () => {
            Object.values(my.sprite).forEach(sprite => sprite.x -= 5);
        });

        this.input.keyboard.on('keydown-D', () => {
            Object.values(my.sprite).forEach(sprite => sprite.x += 5);
        });

        this.input.keyboard.on('keydown-S', () => {
            my.sprite.mouth.setTexture('monsterParts', my.sprite.smileMouth);
        });

        this.input.keyboard.on('keydown-F', () => {
            my.sprite.mouth.setTexture('monsterParts', my.sprite.fangsMouth);
        });

        this.input.keyboard.on('keyup-S', () => {
            my.sprite.mouth.setTexture('monsterParts', my.sprite.defaultMouth);
        });

        this.input.keyboard.on('keyup-F', () => {
            my.sprite.mouth.setTexture('monsterParts', my.sprite.defaultMouth);
        });
    }
}