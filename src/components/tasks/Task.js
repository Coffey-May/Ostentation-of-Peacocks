export default ({ friend, user }) => (
    <section className="user">
        <h3 className="user__name">
            <Link to={`/users/${user.id}`}>
                { user.name }
            </Link>
        </h3>
        {/* <div className="user__location">Location: { Location.address }</div> */}
        <div className="user__breed">Breed: { user.id }</div>
        <div className="user__breed">Customer: { friend.name }</div>
    </section>
)