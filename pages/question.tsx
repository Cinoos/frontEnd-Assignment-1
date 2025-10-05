import React, {use, useState} from "react";
import styles from "../styles/question.module.css";



function Question({ questionsList})
{
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
    const currentQuestion = questionsList[currentQuestionIndex]
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false);


    function checkAns(i,ans)
    {
        console.log(i)
        console.log("correct is" + ans)
        setCurrentQuestionIndex(currentQuestionIndex+1)
        console.log(setScore)
        if (i == ans) 
        {
        setScore(score+1); 
        }

        if (currentQuestionIndex < questionsList.length - 1) 
        {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } 
        else 
        {
            setIsGameOver(true)
        }

    }

    if (isGameOver) {
    return (
      <div className={styles.gameboard}>
        <h2 style={{ fontFamily: 'Arial', textAlign: "center", fontSize: '2rem', fontWeight: 'bold', color: "#DBEDF3" }}>
          Game Finished!
        </h2>
        <p style={{ textAlign: "center", fontSize: '1.5rem', color: "#DBEDF3" }}>
          Your final score is: {score} / {questionsList.length}
        </p>

      </div>
    );
  }


    return (
        <div>
                    <h2 style={{fontFamily: 'Arial, sans-serif', textAlign:"center",fontSize: '2rem', fontWeight: 'bold',color:"#DBEDF3"}} >Score : {score} </h2>
                    <div className={styles.gameboard}>
                        <p className={styles.question} style={{fontFamily: 'Arial, sans-serif', textAlign:"center",fontSize: '3.5rem', fontWeight: 'bold',color:"#DBEDF3"}}> {currentQuestion.question}</p>
                        
                        <div className={styles.controls}>
                            {currentQuestion.option.map((opt,i)=>(
                                <button key={i} className={styles.options} onClick={()=>{checkAns(i,currentQuestion.answer)}} style={{color:"#DBEDF3"}}> {opt} </button>
                            ))}
                        
                        </div>
                    </div>
 
            
        </div>
    )
}



export default Question;