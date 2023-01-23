class isaac {
    constructor(game){
        this.game = game;
        this.count = 0;
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./down_shot.png"), -6, 0, 42.6, 49, 10, 0.1);
        this.xPosition = 400;
        this.yPosition = 200;
        this.moveBoundsLeft = 0;
        this.moveBoundsRight = 1024;



        this.isaacSpritesheet = ASSET_MANAGER.getAsset("./isaac.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./isaac.png"), 2, 80, 40, 20, 1, 0.1, 2);

        this.facing = 1; // 0 = up, 1 = right, 2 = down, 3 = left
        this.state = 1; // 0 = idle, 1 = walking

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // Four Directions
            this.animations.push([]);
            for (var j = 0; j < 2; j++) { // Two States of Movement
                this.animations[i].push([]);
            }
        }

        //Idle Animation state = 0
        //Facing Up = 0
        this.animations[0][0] = new Animator(this.isaacSpritesheet, 0, 79, 32, 20, 1, 0.1, 3.5);
        //Facing Right = 1
        this.animations[1][0] = new Animator(this.isaacSpritesheet, 0, 122, 32, 20, 1, 0.1, 3.5);
        //Facing Down = 2
        this.animations[2][0] = new Animator(this.isaacSpritesheet, 0, 188, 32, 20, 1, 0.1, 3.5);
        //Facing Left = 3
        this.animations[3][0] = new Animator(this.isaacSpritesheet, 0, 144, 32, 20, 1, 0.1, 3.5);

        //Walking Animation state = 1
        //Facing Up = 0
        this.animations[0][1] = new Animator(this.isaacSpritesheet, 0, 79, 32, 20, 10, 0.1, 3.5);
        //Facing Right = 1
        this.animations[1][1] = new Animator(this.isaacSpritesheet, 0, 122, 32, 20, 10, 0.1, 3.5);
        //Facing Down = 2
        this.animations[2][1] = new Animator(this.isaacSpritesheet, 0, 188, 32, 20, 10, 0.1, 3.5);
        //Facing Left = 3
        this.animations[3][1] = new Animator(this.isaacSpritesheet, 0, 144, 32, 20, 10, 0.1, 3.5);



    };


    update(){
        if(this.count < 4) {
            this.facing = 1;
            this.state = 1;
            this.xPosition = this.xPosition + 100 * this.game.clockTick
        } else if (this.count < 10) {
            this.facing = 3;
            this.state = 1;
            this.xPosition = this.xPosition - 100 * this.game.clockTick
        } else if (this.count < 12) {
            this.facing = 2;
            this.state = 0;
        }
    };


    draw(ctx){
        this.count += (1*this.game.clockTick);

        if(this.count > 0) {
            this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);

        }

    };
}