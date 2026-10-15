function StudenCard() {
    return(
        <div className="student-card">
            <h3>{estudiante?.nombre}</h3>
            <p>{estudiante?.matricula}</p>
        </div>
    );
}

export default StudentCard;