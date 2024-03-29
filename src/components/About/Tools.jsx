import {
DiGit,
DiNpm,
DiVisualstudio,
DiWindows,
DiUbuntu
} from 'react-icons/di';

export default function Tools() {
    return (
        <div className="toolsContainer">
            <div className="tool"><DiGit /></div>
            <div className="tool"><DiNpm /></div>
            <div className="tool"><DiVisualstudio /></div>
            <div className="tool"><DiWindows /></div>
            <div className="tool"><DiUbuntu /></div>
        </div>
    );
}