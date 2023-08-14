//两点间距离公式

const findPointDistance = (p1,p2) => Math.sqrt( Math.pow( p1[0] - p2[0] , 2 ) + Math.pow( p1[1] - p2[1] , 2 ))

//求折线长度

const findPollineLength = points => {
    let length = 0;

    for (let i = 0;i < points.length - 1;i++){
        let iLength = findPointDistance( points[i] , points[i+1] );
        length += iLength;
    }

    return length
}

//计算中间点

const findMiddlePoint = points => {
    let result = new Array(2).fill(0);

    for (let i = 0;i < points.length;i++){
        result[0] += points[i][0];
        result[1] += points[i][1];
    }

    result[0] /= points.length;
    result[1] /= points.length;
    
    return result;
}

//求点集中横纵坐标的极差

const findLimitingNum = points => {
    let x = new Array(),y = new Array();

    points.forEach(p => {
        x.push(p[0]);
        y.push(p[1]);
    });

    let result = Math.max(Math.max(...x) - Math.min(...x) , Math.max(...y) - Math.min(...y))
    
    return result;
}

//求向量模长
const findMoudle = vector => {
    let length = 0;

    vector.forEach(x => {
        length += x * x
    });

    return Math.sqrt(length)
}

//点集展开为向量并求单位向量

const findVectorLength = points => {
    let vector = new Array(2 * points.length);

    points.forEach((p,i) => {
        vector[2 * i] = p[0];
        vector[2 * i + 1] = p[1];
    });

    const moudle = findMoudle(vector);

    for (let i = 0; i < vector.length; i++) {
        vector[i] /= moudle;
    }

    return vector;
}

//求向量夹角余弦值

const findCosineValue = (v1,v2) => {
    let similarity = 0;

    v1.forEach((x1,i) => {
        let x2 = v2[i];
        similarity += x1 * x2;
    })

    return similarity;
}

//随机出题

function randomProblem(){
    var operators = ['+', '-', '*'];
    var operator = operators[Math.floor(Math.random() * operators.length)];
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    
    // 确保除法操作符不会导致答案大于100
    if (operator === '/' && num2 > num1) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    var problem = num1 + ' ' + operator + ' ' + num2;
    var answer = eval(problem);
    
    // 如果答案大于100或小于0，则重新生成问题
    if (answer > 100 || answer < 0) {
        let nextProblem = new randomProblem();
        answer = nextProblem.answer;
        problem = nextProblem.problem;
    }
    
    this.answer = answer;
    this.problem = problem;
}