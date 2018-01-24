const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../shared/components/break/break.jsx');
const P  = require('../shared/components/paragraph/paragraph.jsx');
const Image  = require('../shared/components/image/image.jsx');
const TitleBlock = require('../shared/components/titleblock/titleblock.jsx');
const TechBlock = require('../shared/components/techblock/techblock.jsx');

const techs = [
    {
        name: 'SolidWorks',
        link: 'http://www.solidworks.com/',
        logo: '/assets/assets/icons/solidworks.png',
    }
];


const HomePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='homepage'>

            <TitleBlock name='Slamster' date='January 2018'/>

            <TechBlock techs={techs} />

            <P>
                The Slamster is my newest endeavour, still in the early prototyping stage. The end goal is to build an
                autonomous robot, which can drive around an environment while building a map, using a method called
                Simultaneous Localization And Mapping (SLAM).

            </P>
            <Image src='/assets/assets/slamster/CAD_01.png'
                   width='1920' height='1080' background='#F6ECD5'
                   caption='CAD model for the first Slamster prototype, structure only'/>
            <P>

                Before that, though, the goal is to build a working rover. It should, I decided, be as small, fast,
                and agile as possible. To this end, I decided to design it around two large wheels, each powered
                by a powerful brushless DC motor which was originally designed for heavy-duty camera gimbals. These
                3-phase motors are notoriously difficult to control, but extremely lightweight and powerful.

            </P>
            <Image src='/assets/assets/slamster/wheels_motors.jpg' width='1008' height='756'/>
            <P>

                This unique design allows a number of advantages. The rover will be able to turn on the spot, and
                won't need to worry about losing points of contact with the floor. The scanning system, a small LIDAR
                module, will be elevated on a central pole above the height of the wheels.

                <span className='br' />

                I'm currently in the process of aquiring the hardware, and machining the parts for the initial
                prototype (special thanks to my mechanically-inclined
                friend <a href='http://geoffspielman.com'>Geoff Spielman</a> for all his help). Once it's assembled,
                I'll provide an update, before moving on to the motor control system, which should prove an interesting
                challenge. Watch this space!

            </P>
            <Image src='/assets/assets/slamster/parts.jpg' width='806' height='605'/>

        </div>;
    }
});

module.exports = HomePage;
