//form igual o do edittask
import { useParams } from "react-router-dom";

const CreateTask = () => {
  const { user } = useParams();
  const key = JSON.parse(sessionStorage.getItem("key"));

  var darkmodevalid = localStorage.getItem("Darkmode");

  var body = document.querySelector("body");

  darkmodevalid !== "true"
    ? body.classList.add("backgrounddark")
    : body.classList.remove("backgrounddark");

  return (
    <div className={ darkmodevalid !== "true" ? "edittask-component formdark" : "edittask-component" }>
      <div>
        <h1>Create Task </h1>
      </div>
      <form
        action={`https://lucasgerenciadorapi.herokuapp.com/createtask`}
        className="form-edit"
        method="post"
      >
        <input
          className="some"
          type="text"
          name="rotaderetorno"
          id=""
          value={key.id}
          readOnly
        />
        <input
          className="some"
          type="text"
          name="username"
          id=""
          value={user}
          readOnly
        />
        <input
          required
          name="createtittle"
          className="input-edit"
          type="text"
          placeholder="Title of Task"
        />
        <textarea
          required
          name="createcontent"
          className="textarea-edit"
          placeholder="Content of Task"
        />
        <fieldset className={ darkmodevalid !== "true" ? "fieldset-edit formdark" : "fieldset-edit" }>
          <legend>Task Completed</legend>
          <div>
            <input
              required
              type="radio"
              name="createcompletedtask"
              id="completedtrue"
              value={true}
            />
            <label htmlFor="completedtrue">
              <span>True</span>
            </label>
          </div>
          <div>
            <input
              required
              type="radio"
              name="createcompletedtask"
              id="completedfalse"
              value={false}
            />
            <label htmlFor="completedfalse">
              <span>False</span>
            </label>
          </div>
        </fieldset>
        <div className="buttonsbox-editform">
          <input className="submit" type="submit" value="Create" />
          <a className="cancel" href={`/plat/${key.id}`}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
