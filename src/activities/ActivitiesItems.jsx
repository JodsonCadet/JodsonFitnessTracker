import useMutation from "../api/useMutation";

export default function ActivityItem({ activity, canDelete }) {
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["activities"]);

  return (
    <li>
      <strong>{activity.name}</strong> — {activity.description}
      {canDelete && (
        <button
          onClick={() => deleteActivity()}
          disabled={deleting}
          style={{ marginLeft: 8 }}
        >
          {deleting ? "Deleting…" : "Delete"}
        </button>
      )}
      {deleteError && (
        <span style={{ color: "crimson", marginLeft: 8 }}>{deleteError}</span>
      )}
    </li>
  );
}
