import './styles/main.scss';

export function sum(a: number, b: number) {
  return a + b;
}

const app = {
  init: () => {
    console.log('Initialized App');
  },
};

app.init();
