export function getTriviaList() {
  return fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    .then(response => response.json());
}