'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({


	// name: {
    //     first: {
    //       type: String,
    //       required: [true],
    //     },
	// 	last: {
    //       type: String,
    //       required: [true],
    //     },
	// },
	// email: {
	// 	required: [true],
	// 	unique: true,
	// },
	// password: {
    //     type: String,
    //     required: true,
    //     minlength: 6,
    //     maxlength: 32,
    //     validate: {
    //       validator: function( value ) {
    //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    //       },
    //       message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    //     }
    //   },
	// birthday: {
	// 	type: Date,
	// 	required: true
	// 	validate: {
	// 		validator: function( date ){
	// 			return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test( value );
	//           },
	// 		  message: 'Please provide birthday in valid format'
	// 		}
	// 	}

	})

const QuestionSchema = new mongoose.Schema({	})
const User = mongoose.model('User', UserSchema)

const Question = mongoose.model('Question', QuestionSchema)

AnswerSchema.methods.like
 = function (callback){
this.likes +=1
 }
