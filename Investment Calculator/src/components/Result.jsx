export default function Result({ userInput }) {
  console.log(userInput)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
        </tr>
      </tbody>
    </table>
  );
}