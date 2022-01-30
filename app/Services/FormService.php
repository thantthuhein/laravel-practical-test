<?php

namespace App\Services;

use App\Repositories\FormRepository;

class FormService implements Service {
     public function __construct(FormRepository $formRepository)
     {
          $this->formRepository = $formRepository;
     }

     public function save($data)
     {
          return $this->formRepository->create($data);
     }

     public function getUserLatestForm($user)
     {
          return $this->formRepository->getUserLatestForm($user);
     }
}