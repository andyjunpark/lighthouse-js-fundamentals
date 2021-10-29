function judgeVegetable(vegetables, metric) {
  //Our function must return the name of the person who submitted (vegetables.submitter) 
  //the vegetable with the highest ranking in the provided category.
  let maximum = Math.max.apply(Math, vegetables.map(function(o) { return o[metric]; }));
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] === maximum) {
      return vegetables[i].submitter;
    } 
  }
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 32,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))