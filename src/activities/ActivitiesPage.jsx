export default function ActivitiesPage() {
  const tempPull = async () => {
    const response = await fetch("https://fitnesstrac-kr.herokuapp.com/api/activities")
    // console.log(response) 
  }
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <li>{tempPull.name.map}</li>
    </>
    );
  }
