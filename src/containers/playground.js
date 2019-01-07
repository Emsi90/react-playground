import React, { Component } from 'react';

class Playground extends Component {

  state = {
    playground: null
  }

  funAwait1Handler = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Async 1 wykonuje sie po 6s'));
        // return time;
      }, 2000);
    });
  }

  funAwait2Handler = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Async 2 wykonuje sie po 4s'));
      }, 4000);
    });
  }

  loadHandler = async () => {
    try{
      console.log('hq1')
      const await2 = await this.funAwait2Handler();
      const await1 = await this.funAwait1Handler();
      console.log(await2, await1)
    } catch(error) {
      console.log(error)
    }
  }

  intervalHandler = () => {
    let time = 0;
    let interval;
    const timeInt = () => {
        interval = setInterval(() => {
          time += 1;
          console.log(time);
          if(time >= 8) {
            clearInterval(interval);
          }
        }, 1000);
    }
    timeInt();
  }

  // loaderPromiseHandler = () => {
  //   return new Promise((resolve, reject) => {
  //     this.funAwait2Handler(resolve, reject);
  //   });
  // }



  render() {
    return (
      <div>
        <p>Playground</p>
        <button onClick={() => {
            this.loadHandler();
            this.intervalHandler();
          }
        }>Check Async Fun</button>
      </div>
    )
  }
}

export default Playground;