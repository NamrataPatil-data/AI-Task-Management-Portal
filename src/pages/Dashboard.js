import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../App.css";
function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [estimatedEffort, setEstimatedEffort] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("TODO");

    const loadTasks = async () => {

        try {

            const res = await API.get("/tasks");
            setTasks(res.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load tasks");
        }
    };

    const aiSuggest = async () => {

        try {

            const res = await API.get(
                `/tasks/ai-suggest?title=${title}`
            );

            setDescription(res.data.description);
            setPriority(res.data.priority);
            setEstimatedEffort(res.data.estimatedEffort);

        } catch (error) {

            console.log(error);
            alert("AI Suggestion Failed");
        }
    };



    const createTask = async () => {

    if (!title.trim()) {
                  alert("Task title is required");
                  return;
              }

        try {

            await API.post("/tasks", {
                title,
                description,
                priority,
                status: "TODO",
                dueDate,
                estimatedEffort
            });

            setTitle("");
            setDescription("");
            setPriority("MEDIUM");
            setEstimatedEffort("");

            loadTasks();

        } catch (error) {

            console.log(error);
            alert("Failed to create task");
        }
    };

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const editTask = (task) => {

        setEditingId(task.id);

        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setDueDate(task.dueDate || "");
        setEstimatedEffort(task.estimatedEffort);

    };
    const updateTask = async () => {

        if (!title.trim()) {
                alert("Task title is required");
                return;
            }

        try {

            await API.put(`/tasks/${editingId}`, {
                title,
                description,
                priority,
                status: "TODO",
                dueDate,
                estimatedEffort
            });

            setEditingId(null);

            setTitle("");
            setDescription("");
            setPriority("MEDIUM");
            setEstimatedEffort("");

            loadTasks();

        } catch (error) {

            console.log(error);
            alert("Failed to update task");
        }
    };

    const deleteTask = async (id) => {

        try {

            await API.delete(`/tasks/${id}`);

            loadTasks();

        } catch (error) {

            console.log(error);
            alert("Failed to delete task");
        }
    };

    useEffect(() => {

        loadTasks();

    }, []);

    return (
        <div className="container">

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h2>🚀 AI Task Management Portal</h2>

                <button onClick={logout}>
                    Logout
                </button>
            </div>

            <h3>Create Task</h3>

            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
            </select>

            <br /><br />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="TODO">TODO</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="DONE">DONE</option>
            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <input
                type="text"
                placeholder="Estimated Effort"
                value={estimatedEffort}
                readOnly
            />

            <br /><br />

            <button onClick={aiSuggest}>
                AI Suggest
            </button>

            {editingId ? (
                <button onClick={updateTask}>
                    Update Task
                </button>
            ) : (
                <button onClick={createTask}>
                    Create Task
                </button>
            )}
            <h2>Task Dashboard</h2>



            <hr />

            <h3>All Tasks</h3>

            {tasks.length === 0 ? (
                <p>No Tasks Found</p>
            ) : (
                <table border="1" cellPadding="10">

                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Estimated Effort</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {tasks.map(task => (

                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.priority}</td>
                            <td>{task.status}</td>
                            <td>{task.estimatedEffort}</td>
                            <td>{task.dueDate || "N/A"}</td>

                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        justifyContent: "center"
                                    }}
                                >
                                    <button
                                        onClick={() => editTask(task)}
                                        style={{
                                            backgroundColor: "#28a745",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 14px",
                                            borderRadius: "6px"
                                        }}
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button
                                        onClick={() => deleteTask(task.id)}
                                        style={{
                                            backgroundColor: "#dc3545",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 14px",
                                            borderRadius: "6px"
                                        }}
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                    ))}

                    </tbody>

                </table>
            )}

        </div>
    );
}

export default Dashboard;