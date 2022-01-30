<?php

namespace App\Services;

use App\Mail\SubmissionMail;
use App\Repositories\UserRepository;
use App\Repositories\SubmissionRepository;

class SubmissionService implements Service {
     public function __construct(SubmissionRepository $submissionRepository, UserRepository $userRepository)
     {
          $this->submissionRepository = $submissionRepository;
          $this->userRepository = $userRepository;
     }

     public function save($data)
     {
          // Using Jobs but I didn't implemented the service workers.
          // So form submitting and sending email process may slow.
          dispatch(function() use ($data) {
               $this->sendMail($data);
          });

          return $this->submissionRepository->create($data);
     }

     protected function sendMail($data)
     {
          $user = $this->userRepository->find($data['user_id']);

          if ($user) {
               \Mail::to($user->email)->send(new SubmissionMail($data));
          }
     }
}