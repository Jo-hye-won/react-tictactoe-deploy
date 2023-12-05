// import React, { Component, useState } from 'react'
import React from 'react'
import Square from './Square'
import './Board.css'



// 함수형 컴포넌트로 바꾸기
const Board = ({squares, onClick}) => {
    // State을 useState Hook를 이용해서 표현하기
    // getter가 가져오는거 squares라는 이름을 가지고 (첫번째 인수, 변수 이름)
    // setter가 설정하는거 (두번째 인수, State를 정하는 함수)
    // useState라는 hooks를 react에서 가져오고 초기값 null로 설정
    // const [squares, setSquares] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)

    // const calculateWinner = (squares) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ]
    //     for (let index = 0; index < lines.length; index++) {
    //         const [a, b, c] = lines[index];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a];
    //         }
    //     }
    //     return null;
    // }

    // const winner = calculateWinner(squares);
    // let status;
    // if (winner) {
    //     status = 'Winner:' + winner
    // } else {
    //     status = `Next player: ${xIsNext ? 'X' : 'O'}`
    // }


    // const handleClick = (i) => {
    //     const newsquares = squares.slice();

    //     if(calculateWinner(newsquares) || newsquares[i]) {
    //         return;
    //     }

    //     newsquares[i] = xIsNext ? 'X' : 'O';
    //     setSquares(newsquares)
    //     // setXIsNext(!xIsNext)
    //     setXIsNext(prev => !prev)
    // }

    const renderSquare = (i) => {
        // return <Square value={i}/>
        return <Square value={squares[i]}
            onClick={() => onClick(i)} />
    }

    return (
        <div className='board-wrapper'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}


export default Board


//  class 정의형
// export default class Board extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             squares: Array(9).fill(null)
//         }
//     }

//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         squares[i] = 'X';
//         this.setState({squares: squares})
//     }

//     renderSquare(i) {
//         // return <Square value={i}/>
//         return <Square value={this.state.squares[i]} 
//             onClick={() => this.handleClick(i)}/>
//     }

//     render() {
//         return (
//             <div>
//                 <div className='status'> Next Player: X, 0</div>
//                 <div className='board-row'>
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
