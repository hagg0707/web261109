doucument.write("외부 스크립트 방법");

console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력됩니다.");

const titles = ["인터스텔라", "이웃집 토토로", "센과 치히로의 행방불명", "너의 이름은.", "기생충"];
const ratings = [8.7, 8.4, 8.1, 8.4, 9.4];
const years = [2014, 1990, 2001, 2016, 2019];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
 console.log("평균:", average);
let max = ratings[0];
let maxIndex = 0;
 for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
    console.log("최고:", titles[maxIndex], max)
 }
let count = 0;
 for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > 8.5) {
        count++;
    }
 }
 console.log("8.5 이상의 영화 수:", count);
 for(let i = 0; i < titles.length; i++) {
    console.log(titles[i]);}
    if (ratings[i] > 8.5) {
        label = "명작";
    } else if (ratings[i] > 7.0) {
        label = "평작";
    } else if (ratings[i] > 6.5) {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label)
