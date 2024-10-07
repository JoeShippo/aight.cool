import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProjectModal from "./ProjectModal"; // Import your modal component

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
};

const ProjectCard = ({ title, description, technologies, link, imageUrl, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="w-full flex-row rounded-lg overflow-hidden">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0"
        >
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-6 flex flex-col justify-center">
          
          <Typography variant="h4" color="blue-gray" className="mb-4 font-semibold">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {truncateText(description, 12)}
          </Typography>
          <Button variant="text" className="flex items-center gap-2 w-auto self-start"  onClick={handleOpenModal}>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </CardBody>
      </Card>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={{ title, description, technologies, link, imageUrl, status }}
      />
    </>
  );
};

export default ProjectCard;
