const { User, Thought } = require('../models');

const friendCount = async () =>
  User.aggregate(
    [
      {
        $count: "User"
      }
    ]
  )
    // Your code here
    .then((numberOfFriends) => numberOfFriends);

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find() 
        .then(async (users) => {
          const userObj = {
            users,
            friendCount: await friendCount(),
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove them from the course
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => {
          !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  
    // Add an friend to a user
    addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove friend from a user
    removeFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friend: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      )
        .then((student) =>
          !student
            ? res
                .status(404)
                .json({ message: 'No student found with that ID :(' })
            : res.json(student)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
  