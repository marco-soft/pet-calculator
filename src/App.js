import { Container, ProgressBar } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Intro from "./components/Intro";
import TypeOfPet from "./components/TypeOfPet";
import AgeOfPet from "./components/AgeOfPet";
import ActivityLevelPet from "./components/ActivityLevelPet"
import WeightPet from "./components/WeightPet"
import HeightOfPet from "./components/HeightOfPet"
import MonthsOfPet from "./components/MonthsOfPet"

function App() {
  const totalSteps = 4;
  const [advance, setAdvance] = useState(0);
  const [back, setBack] = useState(0);
  const [petName, setPetName] = useState(null);
  const [age, setAge] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);
  const [weight, setWeight] = useState(null);
  const [petSelected, setPetSelected] = useState(null);
  const [monthsOfPet, setMonthsOfPet] = useState(null);

  return (
    <Container className="minimumHeight" >
      {
        {
          0: <Intro advance={setAdvance}/>,
          1: <TypeOfPet back={back} setBack={setBack} advance={setAdvance} petName={setPetName} petSelected={setPetSelected}/>,
          2: <AgeOfPet back={back} setBack={setBack} advance={setAdvance} age={setAge} petName={petName} petSelected={petSelected}/>,
          2.5: <HeightOfPet back={back} setBack={setBack} advance={setAdvance} height={setAge}/>,
          3: <ActivityLevelPet back={back} setBack={setBack} advance={setAdvance} activityLevel={setActivityLevel} petName={petName} petSelected={petSelected}/>,
          3.5: <MonthsOfPet back={back} setBack={setBack} advance={setAdvance} petName={petName} petSelected={petSelected} monthsOfPet={setMonthsOfPet}/>,
          4: <WeightPet back={back} setBack={setBack} advance={setAdvance} weight={setWeight} age={age} petName={petName} petSelected={petSelected} activityLevel={activityLevel} monthsOfPet={monthsOfPet}/>
        }[advance]
      }
      {advance !== null ? <ProgressBar animated now={advance*100/totalSteps} label={`${advance}/${totalSteps}`} variant="warning"/> : null}
    </Container>
  );
}

export default App;
