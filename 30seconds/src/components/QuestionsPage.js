
import React from 'react'

function QuestionsPage(){
    const questionList = questions.map((question,index) => <li>{question}</li>)
	
    return (
        <div>
			
			<div style={{listStyle: "none"}}> 

				<h1 style={{color: "white", fontWeight: 600, paddingTop: 20, paddingBottom: 20, margin:0, backgroundColor: "#0dcaf0", paddingLeft: 75}}>Behavioral Questions</h1>
				<h4 style={{color: "white", fontWeight: 500, margin:0, backgroundColor: "#0dcaf0", paddingLeft: 75}}>
					A curated list of the most asked questions during Behavioral Interviews. 
				</h4>
				<h4 style={{color: "white", fontWeight: 500, paddingBottom: 15, margin:0, backgroundColor: "#0dcaf0", paddingLeft: 75}}>
					Use these questions below as practice questions!
				</h4>
				<p style={{fontSize: "18px", backgroundColor: "#0dcaf0", paddingLeft: 75, paddingBottom: 30, margin: 0}}> {questionList} </p>
			</div>

        </div>
    );
}

//40 Questions in the array
export const questions = [
	"How Did You find out about This Position?",
	"Why Do You Want to Work at This Company?",
	"Why Do You Want This Job?",
	"Why Should We Hire You?",
	"What Can You Bring to the Company?",
	"What Are Your Greatest Strengths?",
	"What Do You Consider to Be Your Weaknesses?",
	"What Is Your Greatest Professional Achievement?",
	"Tell Me About a Challenge or Conflict You’ve Faced at Work, and How You Dealt With It.",
	"Tell Me About a Time You Demonstrated Leadership Skills.",
	"What’s a Time You Disagreed With a Decision That Was Made at Work?",
	"Tell Me About a Time You Made a Mistake.",
	"Tell Me About a Time You Failed.",
	"What’s Your Current Salary?",
	"What Do You Like Least About Your Job?",
	"What Are You Looking for in a New Position?",
	"What Type of Work Environment Do You Prefer?",
	"What’s Your Work Style?",
	"What’s Your Management Style?",
	"How Would Your Boss and Coworkers Describe You?",
	"How Do You Deal With Pressure or Stressful Situations?",
	"What Do You Like to Do Outside of Work?",
	"How Do You Prioritize Your Work?",
	"What Are You Passionate About?",
	"What Motivates You?",
	"What Are Your Pet Peeves?",
	"How Do You Like to Be Managed?",
	"Where Do You See Yourself in Five Years?",
	"How Do You Plan to Achieve Your Career Goals?",
	"What’s Your Dream Job?",
	"What Makes You Unique?",
	"What Should I Know That’s Not on Your Resume?",
	"What Would Your First 30, 60, or 90 Days Look Like in This Role?",
	"What Are Your Salary Expectations?",
	"What Do You Think We Could Do Better or Differently?",
	"When Can You Start?",
	"If You Were an Animal, Which One Would You Want to Be?",
	"Do You Have Any Questions for Us?",
	"Do you prefer working independently or on a team?",
	"Who are Your Role Models in Life"
];

export default QuestionsPage;