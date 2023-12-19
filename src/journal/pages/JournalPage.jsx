import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views/';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur
				eos amet officia facilis assumenda exercitationem, similique, maxime
				suscipit quae officiis voluptas quisquam nobis. Voluptate ea similique
				accusantium quam rem!
			</Typography> */}

      {/* {<NothingSelectedView />} */}

      {<NoteView />}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
