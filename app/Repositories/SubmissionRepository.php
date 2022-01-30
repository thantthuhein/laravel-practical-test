<?php

namespace App\Repositories;

use App\Models\Submission;

class SubmissionRepository implements Repository {
     public function __construct(Submission $submission)
     {
          $this->submission = $submission;
     }

     public function create($data)
     {
          return $this->submission->create($data);
     }
}