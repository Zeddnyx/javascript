// iheritence is usefull, you dont need to write code again and again
//

class Animal{
  alive = true;

  eat(){
    console.log(`${this.name} is eating`);
  }
}


class Rabbit extends Animal{
  name = 'rabbit';

  run(){
    console.log(`${name} is running`);
  }
}

class Hawk extends Animal{
  name = 'hawk';

  fly(){
    console.log(`${name} is flying`);
  }
}

const rabbit = new Rabbit();
const hawk   = new Hawk();

rabbit.run();
rabbit.eat();

hawk.eat();
hawk.fly();
