const programStartTime = new Date().getTime();

const print = text => {
    const now = new Date().getTime();
    console.log(`${text} after ${now - programStartTime} ms`);
};

print('A');

const runBlockingTask = milliseconds => {
    const startTime = new Date().getTime();
    while(new Date().getTime() - startTime <  milliseconds);
};

// const measureExecutionTime = () => {
//     const startTime = new Date().getTime();
//     const endTime = new Date().getTime();
//     console.log(`long blocking task took ${endTime - startTime} milliseconds`);
// };

const printC = () => {
    print('C');
};

setTimeout(printC, 2000); // do zegaru oczekiwań

const printE = () => {
    runBlockingTask(600);
    print('E');
};

const intervalID = setInterval(printE, 1000);

setTimeout(() => {
    clearInterval(intervalID)
}, 7000);

print('B');

runBlockingTask(2000);

print('D');