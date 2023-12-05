import React from "react"
import "./Square.css"

// // export default class Square extends React.Component {
// //     render() {
// //         return (
// //             <button className="square" onClick={() => {console.log('click')}}>
// //                 {this.props.value}
// //             </button>
// //         )
// //     }
// // }
// export default class Square extends React.Component { 

//     // // state생성
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         value: null,
//     //     }
//     // }

//     render() {
//         return (
//             // state 변경 및 state값 이용하기
//             // <button className="square" onClick={() => {this.setState({value: 'X'})}}>

//             <button className="square" 
//                 onClick={() => {this.props.onClick() }}>

//                 {/*state 이용하기 */}
//                 {/* {this.state.value} */}
//                 {this.props.value}
//             </button>
//         )
//     }
// }


// 함수형 컴포넌트로 바꾸기 
const Square = ({onClick, value}) => {
    return (
        <button className="square"
            onClick={onClick}>
            {value}
        </button>
    )
}

export default Square