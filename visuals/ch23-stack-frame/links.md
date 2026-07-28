# ch23-stack-frame · 시각화 자료

> 출처: slog.gg/p/14146 23강

## 메모리 시각화 (pythontutor / java_visualize)
1. https://pythontutor.com/visualize.html#code=public%20class%20Main%20%7B%0A%20%20//%20main%20%3D%3D%208byte%28number1%20%2B%20number2%29%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20int%20number1%20%3D%2010%3B%0A%20%20%20%20int%20number2%20%3D%2020%3B%0A%20%20%20%20%0A%20%20%20%20System.out.println%28%22call%20sub1%2810%29%3B%22%29%3B%0A%20%20%20%20%0A%20%20%20%20sub1%2810%29%3B%0A%20%20%20%20%0A%20%20%20%20System.out.println%28%22call%20sub1%2820%29%3B%22%29%3B%0A%20%20%20%20%0A%20%20%20%20sub1%2820%29%3B%0A%20%20%7D%0A%0A%20%20//%20sub1%20%3D%3D%204byte%28age%29%0A%20%20static%20void%20sub1%28int%20age%29%20%7B%0A%20%20%20%20System.out.println%28%22age%20%3A%20%22%20%2B%20age%29%3B%0A%20%20%7D%0A%7D&curInstr=0&mode=display&origin=opt-frontend.js&primitivesAsObjects=true&py=java&textReferences=true

