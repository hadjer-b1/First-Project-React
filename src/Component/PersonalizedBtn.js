function PersonalizedBtn({ Name, Color, onClick }) {
    return (
        <button className="personalized-btn" style={{ backgroundColor: Color }} onClick={onClick}>
            {Name}
        </button>
    );
}
export default PersonalizedBtn;
