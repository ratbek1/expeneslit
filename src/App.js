import './App.css';
import {useSelector} from "react-redux";
import ExpensesList from "./components/ExpensesList";

function App() {
    const {balance,expenses} = useSelector(state => state)
    return (
        <div className="bg-dark min-vh-100">
            <div className="container">
                <h1 className="text-white text-center pt-5">Ваш лист расходов</h1>
                <div className="d-flex justify-content-center my-5">
                    <div className="bg-secondary w-25 p-5 text-center border border-3 border-white rounded-5">
                        <h1 className="text-white">Баланс</h1>
                        <h2 className="text-white">{balance} $</h2>
                    </div>
                    <div className="bg-danger w-25 p-5 text-center mx-4 border border-3 border-white rounded-5">
                        <h1 className="text-white">Расход</h1>
                        <h2 className="text-white">{expenses} $</h2>
                    </div>
                </div>
                <ExpensesList/>
            </div>
        </div>
    );
}

export default App;
