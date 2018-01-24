const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../shared/components/break/break.jsx');
const P  = require('../shared/components/paragraph/paragraph.jsx');
const H2  = require('../shared/components/subheading/subheading.jsx');
const Video  = require('../shared/components/video/video.jsx');
const TitleBlock = require('../shared/components/titleblock/titleblock.jsx');
const TechBlock = require('../shared/components/techblock/techblock.jsx');

const techs = [
    {
        name: 'Node.js (ES7)',
        link: 'https://nodejs.org/en/',
        logo: '/assets/assets/icons/nodejs.png',
    },
    {
        name: 'Swift',
        link: 'https://www.apple.com/ca/swift/',
        logo: '/assets/assets/icons/swift.png',
    },
    {
        name: 'Arduino',
        link: 'https://www.arduino.cc/',
        logo: '/assets/assets/icons/arduino.png',
    },
    {
        name: 'Python',
        link: 'https://www.python.org/',
        logo: '/assets/assets/icons/python.png',
    },
];

const links = [
    {
        name: 'GitHub',
        link: 'https://github.com/willdavidc/arbitcoiner',
        logo: 'fa fa-github',
    }
];

const HomePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='homepage'>

            <TitleBlock name='Simon Says' date='June 2016'/>

            <TechBlock techs={techs} links={links} />

            <P>
                Between midday on June 26, 2016, and 2 PM the following afternoon, I participated in the University of
                Waterloo's EngHack hackathon with good friend and fellow Mechatronics Engineering student Geoff
                Spielman. Over that 26 hour period we created this project: a multi-platform, interconnected game of
                Simon Says.

            </P>
            <Video src='https://www.youtube.com/embed/pmWjzaiKxCw?rel=0&amp;showinfo=0'/>
            <P>

                To start, Player 1 uses the iOS app to tap out a sequence of colours. Player 2,
                located elsewhere, watches as the same sequence is played back on colour-coordinated LEDs connected to
                a breadboard. He or she, having watched and memorized the sequence, must then repeat it back using
                physical buttons representing the different colours. If they get it wrong, then the game is over; If
                they succeed, however, then they get to create a new sequence, which is displayed on the phone for
                Player 1 to try and recall, after which the process repeats. At the end of each back-and-forth, the
                sequence gets one element longer.
            </P>

            <H2>How It Works</H2>

            <P>
                Play starts on the iOS app, written in Swift. There are four squares coloured red, yellow, green, and
                blue, which work as both the lights and the buttons. The app also prompts the user at each stage of the
                game, and at the start, it instructs the player to tap out a sequence of length 4.

                <span className='br' />

                When this sequence has been entered, the app packages the sequence into an array of numerical values,
                and converts that output into a JSON string. Then, using a SocketIO library for Swift, it emits the
                message over the internet to a Node.js application running on a private web server. The server starts
                broadcasting this received message once per second, again using SocketIO.

                <span className='br' />

                The other player's client is a Raspberry Pi, which uses a Python SocketIO library to listen to the
                server's broadcasts. When the incoming message changes, the Pi knows that it's now the second player's
                turn. The Python script decodes the message into a list, and transmits the sequence to a connected
                Arduino via the serial connector.

                <span className='br' />

                The Arduino displays the sequence on four coloured LEDs (red, yellow, green, and blue, as before),
                waits for the player to respond, checks if they got it right, and if so, allows the second player to
                create their own sequence. This new sequence is then sent back to the phone using exactly the same
                process.
            </P>

            <H2>After the Hackathon</H2>

            <P>
                While we were both very happy with what had been accomplished during the Hackathon, both Geoff and I
                agreed that there was still more we could do. So, in a spirit of adventurism that remained somehow
                uncrushed in the face of close to 30 hours of hard work and no sleep, we drew up plans. Here's what
                we've done since:

                <span className='bold block'>&nbsp;&nbsp;Multi-threaded the Python script</span>

                <span className='indent'>
                    Python cannot be fully multi-threaded, because it includes something called the global interpreter
                    lock. This prevents more than one thread from being executed at the same time. In a compiled
                    language like C++, different threads are capable of running on different computer cores at the same
                    time, allowing each thread to run at its full potential, multiplying the overall speed. However in
                    Python, while it is still possible to run multiple threads, they can only processed one at a time,
                    essentially forcing the multiple threads to take turns. Far from an increase in processing power,
                    multi-threading in Python usually makes a program runs slower, due to the inefficiency of the
                    switching.

                    <span className='br' />

                    In the case of this project, however, that's not so much of a problem, because by far the most time
                    consuming part of our Python script's execution loop is waiting to listen for a message from the
                    server. This process originally required the entire program to halt for about 0.8 seconds on every
                    execution of the control loop, blocking the thread. We used Python's threading module to execute
                    all the server-side IO on a separate thread, so the rest of the program can execute while it's
                    still waiting around.
                </span>

                <span className='bold block'>&nbsp;&nbsp;Added a two-way text messaging system</span>

                <span className='indent'>
                    This was a feature we began to implement towards the end of the hackathon. Even though the
                    communication of messages wasn't built, the interface of the iOS app is already built to send,
                    receive, display, and store messages from the other player.

                    <span className='br' />

                    The interesting part of the messaging system, though, is that the Arduino player sends and receive
                    messages using morse code. We refactored the Arduino code from the ground up to allow the device
                    keep track of not only multiple simultaneous button presses, but also how long it has been since
                    any of them changed state. This allows morse code to be send using a single input button, and we
                    also used it to perform debouncing on the gameplay buttons, which made them much more reliable to
                    press.

                    <span className='br' />

                    Translation between morse code and the regular Latin alphabet is done automatically by the Node.js
                    server.
                </span>

                <span className='bold block'>&nbsp;&nbsp;Created a testing interface</span>

                <span className='indent'>
                    Towards the end of the hackathon, it was becoming difficult to debug and troubleshoot the device
                    when the server was involved. We had no way to determine what messages the server was broadcasting
                    in either direction, and the only way we could reset them was by performing a full reset of the
                    server.

                    <span className='br' />

                    To solve this problem, we created an internal debugging tool, which we called 'The Interface'. It
                    was a live HTML webpage, hosted by the same Node.js server, which allowed us not only to see what
                    sequences and messages were being broadcast by the server, but also to change them on the fly.
                    This greatly expedited the debugging process.
                </span>
            </P>
        </div>;
    }
});

module.exports = HomePage;
