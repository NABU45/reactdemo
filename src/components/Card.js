function Card(props) {
  const handelDeleteIconClick = () => {
props.deleteHandler(props.incidentNumber);

  }



  return (
      <div className="card">
      <div className="header-container">
        <div className='incident-info-container'>
          <div style={{
            backgroundColor: props.status == "in_progress" ? "yellow" : "cyan",
          }} className='badge'>{ props.status }</div>
          <span>{props.incidentNumber}</span>
        </div>
        <div className='header-menu-container'>
          <i onClick={handelDeleteIconClick} className='fa fa-ellipsis-vertical'></i>
        </div>
      </div>
      <h5>{props.title}</h5>
      <small>{props.time}</small>
      <hr />
      <div className='further-detail-container'>
        <div className='further-detail-item-container'>
          <span>Priority</span> <br />
          <span>{props.priority}</span>
        </div>
        <div className='further-detail-item-container'>
          <span>SLA</span> <br />
          <span>Blah blah blah</span>
        </div>
      </div>
    </div>
  );
}

export default Card;