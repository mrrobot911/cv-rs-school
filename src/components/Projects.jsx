import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

function Progects() {
  const { context } = useMyContext();
  return (
    <div id="projects">
      <h2>{locale[context.local]["project"]} :</h2>

    </div>
  )
}

export default Progects