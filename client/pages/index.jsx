const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../shared/components/break/break.jsx');
const P  = require('../shared/components/paragraph/paragraph.jsx');
const Image  = require('../shared/components/image/image.jsx');
const TriImage  = require('../shared/components/triimage/triimage.jsx');
const TitleBlock = require('../shared/components/titleblock/titleblock.jsx');


const HomePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='homepage'>
            <P>
                <span className='br' />
                <span className='br' />
                <span className='massive'>Hi! I'm Will,</span>  and I'm a Mechatronics Engineering student at the
                University of Waterloo. I like coding, rock climbing, and fabricating miniature spaceships on my 3D
                printer. Welcome, to my personal website.
            </P>
            <Image src='/assets/assets/skiing_wide.jpg' width='1920' height='1080' wide='true'/>
            <P>
                Mechatronics Engineering is a co-op program, which means I'm currently looking for work. More
                specifically, 16 weeks of work, from May to August, 2018. I've got a pretty diverse set of technical
                skills, with over 12 months of work placement under by belt, as well as an affinity for public speaking
                and a head for prototyping and design. If that sounds like someone you could use, you can download
                my résumé from the sidebar, and please get in contact.
            </P>

            <P>Beyond that, thanks for stopping by. Feel free to take a look around while you're here!</P>
        </div>;
    }
});

module.exports = HomePage;
