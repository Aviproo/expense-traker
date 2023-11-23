const Expenses = () => {
  return (
    <div>
      <div>
        Spent Money <input />
      </div>
      <div>
        Description <input />
      </div>
      <div>
        Catagory:
        <select name="cars" id="cars">
          <option value="volvo">Food</option>
          <option value="saab">Petrol</option>
          <option value="mercedes">Salary</option>
          <option value="audi">Recharge</option>
        </select>
      </div>
    </div>
  );
};
export default Expenses;
