    var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}


    var game = new Phaser.Game(config);

    var gameOver=false;

    function preload(){
        this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('sky','assets/bg1.png', { frameWidth: 5312, frameHeight: 5036 });
        this.load.image('ground', 'assets/platforms.png');
    }
    function create(){
        background=this.add.image(0,0, 'sky');
        bird=this.physics.add.image(100,300,'bird');
        bird.body.collideWorldBounds = true;
        cursors = this.input.keyboard.createCursorKeys();

        platforms = this.physics.add.staticGroup();

    
    obstacle=platforms.create(300, 600, 'ground');
    obstacle1=platforms.create(350, 0, 'ground');
    obstacle2=platforms.create(450, 100, 'ground');
    obstacle3=platforms.create(500, 650, 'ground');
    obstacle4=platforms.create(600, 500, 'ground');
    obstacle5=platforms.create(750, 200, 'ground');
    obstacle6=platforms.create(850, 800, 'ground');
    obstacle7=platforms.create(950, 0, 'ground');
    obstacle8=platforms.create(1050, 500, 'ground');

    obstacle9=platforms.create(1150, 600, 'ground');
    obstacle10=platforms.create(1250, 0, 'ground');
    obstacle11=platforms.create(1300, 500, 'ground');
    obstacle12=platforms.create(1400, 100, 'ground');
    obstacle13=platforms.create(1500, 650, 'ground');
    obstacle14=platforms.create(1600, 500, 'ground');
    obstacle15=platforms.create(1700, 200, 'ground');
    obstacle16=platforms.create(1800, 800, 'ground');
    obstacle17=platforms.create(1900, 0, 'ground');
    obstacle18=platforms.create(2000, 500, 'ground');

    obstacle19=platforms.create(2100, 600, 'ground');
    obstacle20=platforms.create(2200, 0, 'ground');
    obstacle21=platforms.create(2300, 100, 'ground');
    obstacle22=platforms.create(2400, 650, 'ground');
    obstacle23=platforms.create(2500, 500, 'ground');
    obstacle24=platforms.create(2600, 200, 'ground');
    obstacle25=platforms.create(2700, 800, 'ground');
    obstacle26=platforms.create(2800, 0, 'ground');
    obstacle27=platforms.create(2900, 500, 'ground');

    obstacle28=platforms.create(3000, 600, 'ground');
    obstacle29=platforms.create(3050, 0, 'ground');
    obstacle30=platforms.create(3150, 100, 'ground');
    obstacle31=platforms.create(4150, 650, 'ground');
    obstacle32=platforms.create(4250, 500, 'ground');
    obstacle33=platforms.create(4350, 200, 'ground');
    obstacle34=platforms.create(4450, 800, 'ground');
    obstacle35=platforms.create(4550, 0, 'ground');
    obstacle36=platforms.create(4650, 500, 'ground');

    obstacle37=platforms.create(4750, 600, 'ground');
    obstacle38=platforms.create(4850, 0, 'ground');
    obstacle39=platforms.create(4950, 100, 'ground');
    obstacle40=platforms.create(5050, 650, 'ground');
    obstacle41=platforms.create(5200, 500, 'ground');
    obstacle42=platforms.create(5300, 200, 'ground');
    obstacle43=platforms.create(5400, 800, 'ground');
    obstacle44=platforms.create(5500, 0, 'ground');
    obstacle45=platforms.create(5600, 500, 'ground');

     this.physics.add.collider(bird, obstacle1);
     this.physics.add.collider(bird, obstacle2);
     this.physics.add.collider(bird, obstacle3);
        
    }
    function update(){
        obstacle.x=obstacle.x-2;
        obstacle1.x=obstacle1.x-2;
        obstacle2.x=obstacle2.x-2;
        obstacle3.x=obstacle3.x-2;
        obstacle4.x=obstacle4.x-2;
        obstacle5.x=obstacle5.x-2;
        obstacle6.x=obstacle6.x-2;
        obstacle7.x=obstacle7.x-2;
        obstacle8.x=obstacle8.x-2;

         obstacle9.x=obstacle9.x-2;
        obstacle10.x=obstacle10.x-2;
        obstacle11.x=obstacle11.x-2;
        obstacle12.x=obstacle12.x-2;
        obstacle13.x=obstacle13.x-2;
        obstacle14.x=obstacle14.x-2;
        obstacle15.x=obstacle15.x-2;
        obstacle16.x=obstacle16.x-2;
        obstacle17.x=obstacle17.x-2;

         obstacle18.x=obstacle18.x-2;
        obstacle19.x=obstacle19.x-2;
        obstacle20.x=obstacle20.x-2;
        obstacle21.x=obstacle21.x-2;
        obstacle22.x=obstacle22.x-2;
        obstacle23.x=obstacle23.x-2;
        obstacle24.x=obstacle24.x-2;
        obstacle25.x=obstacle25.x-2;

         obstacle26.x=obstacle26.x-2;
        obstacle27.x=obstacle27.x-2;
        obstacle28.x=obstacle28.x-2;
        obstacle29.x=obstacle29.x-2;
        obstacle30.x=obstacle30.x-2;
        obstacle31.x=obstacle31.x-2;
        obstacle32.x=obstacle32.x-2;
        obstacle33.x=obstacle33.x-2;

         obstacle34.x=obstacle34.x-2;
        obstacle35.x=obstacle35.x-2;
        obstacle36.x=obstacle36.x-2;
        obstacle37.x=obstacle37.x-2;
        obstacle38.x=obstacle38.x-2;
        obstacle39.x=obstacle39.x-2;
        obstacle40.x=obstacle40.x-2;
        obstacle41.x=obstacle41.x-2;
        obstacle42.x=obstacle42.x-2;
        obstacle43.x=obstacle43.x-2;
        obstacle44.x=obstacle44.x-2;
        obstacle45.x=obstacle45.x-2;



        if (gameOver) {
            return;
        }

        if (cursors.up.isDown) {
            bird.setVelocity(0,-100); 
        }

        function hitground (bird, platforms)
            {
                this.physics.pause();

                bird.setTint(0xff0000);

                gameOver = true;
            }
        
    }
    
