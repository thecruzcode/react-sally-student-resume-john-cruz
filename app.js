`use strict`;

/*globals ReactDOM */

function App(props) {
    return (
      <div className="container">
        <Header name="{props.name}" />

        <main>
            <section role='region'>
              <address role='contact-info'>
                <img src='https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'/>
                <p>Name: {props.name}</p>
                <p>Email: sallystudent@gmail.com</p>
                <p>Phone Number: 555.555.5555</p>
                <p>Address: 12345 Disneyland, OC, CA 55555</p>
              </address>
            </section>

            <section role='region'>
                <h2>Employment History</h2>
                <ul>
                    <li>
                        <p>FaceBook, Inc</p>
                        <p>Software Engineer</p>
                        <p>2018-Present</p>
                        <p>Built a lot of applications</p>
                    </li>
                    <li>
                        <p>Universal Studios</p>
                        <p>Director</p>
                        <p>2005-2008</p>
                        <p>Made films</p>
                    </li>
                </ul>
            </section>
            <section role='region'>
                <h2>Education</h2>
                <ul>
                    <li>
                        <p>Chapman University</p>
                        <p>Bachelor of Fine Arts</p>
                        <p>1999-2002</p>
                        <p>GPA: 3.5</p>
                    </li>
                </ul>
            </section>
        </main>
      </div>
  )
}

App.defaultProps = {
    name: 'Sally Student'
};

ReactDOM.render(
    <App name="Jimmy Smith"/>,
    document.querySelector('#root')
);