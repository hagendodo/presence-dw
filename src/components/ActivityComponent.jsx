import { copyToClipboard, formatDateTimeRange } from "@/services/helper";

export default function ActivityComponent({ data }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        className="card"
        style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="card-body">
          <h5 className="card-title mb-2">{data.name}</h5>
          <small className="text-muted">
            {formatDateTimeRange(data.start_date, data.end_date)}
          </small>
          <p className="card-text mt-2">{data.description}</p>
          <div className="text-right">
            <a href={`activities/${data.id}`} className="btn btn-success">
              Lihat Presensi
            </a>
            <button
              type="button"
              onClick={() => {
                copyToClipboard(data.id);
              }}
              className="btn btn-secondary ml-2"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
