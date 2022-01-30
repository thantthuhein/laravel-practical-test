<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use App\Models\Form;
use Illuminate\Http\Request;
use App\Services\FormService;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaveFormRequest;

class FormController extends Controller
{
     public function __construct(FormService $formService)
     {
          $this->formService = $formService;
     }

     public function save(SaveFormRequest $request)
     {
          $formData = $this->formService->save($request->validated());

          return response()->json($formData);
     }

     public function latestForm(User $user)
     {
          $formData = $this->formService->getUserLatestForm($user);

          return response()->json($formData);
     }
}
