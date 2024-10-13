import {
    Dialog,
    DialogHeader,
    DialogBody,
    Button,
    Typography,
    IconButton,
    DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ProjectModal = ({ isOpen, onClose, project }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            )}

            {/* Modal */}
            <Dialog
                open={isOpen}
                handler={onClose}
                size="lg"
            >
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Section: Image */}
                    <div className="w-full hidden md:block md:w-1/3 flex-shrink-0">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-l-lg"
                            style={{ minHeight: '60vh' }}
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="w-full md:w-2/3 p-6 overflow-y-auto flex flex-col justify-center relative">
                        <div className="flex items-center justify-between">
                            <DialogHeader className="flex flex-col items-start p-0 mb-4">
                                {" "}
                                <span className="px-2 py-1 text-xs font-light slate-800 rounded-full border-solid border-aight opacity-80 ">
                                    {project.status}
                                </span>
                                <Typography className="mt-2" variant="h4">
                                    {project.title}
                                </Typography>
                            </DialogHeader>
                            <IconButton
                                size="sm"
                                variant="text"
                                className="!absolute right-3.5 top-3.5"
                                onClick={onClose}
                            >
                                <XMarkIcon className="h-4 w-4 stroke-2" />
                            </IconButton>
                        </div>

                        {/* Technologies */}

                        

                        <DialogBody className="p-0">
                        {project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                                <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium border-aight-teal tealText rounded-full"
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        )}

                            {/* Description */}
                            <div className="mb-4 text-black font-normal">{project.description}</div>
                            
                        </DialogBody>
                        {project.link !== '#' && (
                            <DialogFooter className="justify-start p-0">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="filled" size="md" color="blue" className="tealBG text-white opacity-80 hover:opacity-100 hover:shadow-none">
                                        Visit Project
                                    </Button>
                                </a>
                            </DialogFooter>
                        )}
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ProjectModal;
